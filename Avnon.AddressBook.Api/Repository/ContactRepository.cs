using System.Collections.Generic;
using System.Data;
using System.Linq;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;
using Dapper;
using System.Threading.Tasks;

namespace Avnon.AddressBook.Api.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly IDbConnection _conn;
        
        public ContactRepository(IDbConnection conn)
        {
            _conn = conn;
        }

        public async Task<IEnumerable<Contact>> FindContactsAsync(string searchText)
        {
            var sp = @"CONTACTS_FIND_P";

            var contacts = await _conn.QueryAsync<Contact, Tag, Contact>(sp, (contact, tag) =>
            {
                contact.Tags = contact.Tags ?? new List<Tag>();
                contact.Tags.Add(tag);
                return contact;
            }, splitOn: "TagId", param: new { SearchText = searchText }, commandType: CommandType.StoredProcedure);

            return contacts.GroupBy(a => a.ContactId).Select(group =>
            {
                var contact = group.First();
                contact.Tags = group.Select(a => a.Tags.Single()).ToList();
                return contact;
            });
        }

        public async Task<Contact> GetContactByIdAsync(int contactId)
        {
            var sp = @"CONTACT_GET_BY_ID_P";

            using (var query =
                await _conn.QueryMultipleAsync(sp, new {ContactId = contactId},
                    commandType: CommandType.StoredProcedure))
            {
                var contact = await query.ReadFirstAsync<Contact>();
                var tags = await query.ReadAsync<Tag>();

                contact.Tags = tags.ToList();

                return contact;
            }
        }
    }
}