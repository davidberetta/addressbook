using System.Collections.Generic;
using System.Data;
using System.Linq;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;
using Dapper;

namespace Avnon.AddressBook.Api.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly IDbConnection _conn;
        
        public ContactRepository(IDbConnection conn)
        {
            _conn = conn;
        }
        
        public async IEnumerable<Contact> GetAllContacts()
        {
            var sql = @"";

            var contacts = await _conn.QueryAsync<Contact, Tag, Contact>(sql, (contact, tag) =>
            {
                contact.Tags = contact.Tags ?? new List<Tag>();
                contact.Tags.Add(tag);
                return contact;
            });
            
            contacts.R

        }

        public IEnumerable<Contact> FindContacts(string searchString)
        {
            var sql = @"";
            
            return _conn.Query<Contact, Tag, Contact>(sql, (contact, tag) =>
            {
                contact.Tags = contact.Tags ?? new List<Tag>();
                contact.Tags.Add(tag);
                return contact;
            }).GroupBy(a => a.ContactId).Select(group =>
            {
                var contact = group.First();
                contact.Tags = group.Select(a => a.Tags.Single()).ToList();
                return contact;
            });
        }

        public Contact GetContactById(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}