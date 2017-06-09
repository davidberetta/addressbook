using System.Collections.Generic;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Business.Interfaces
{
    public interface IContactService
    {

        Task<IEnumerable<Contact>> FindContactsAsync(string searchText);

        Task<IEnumerable<Contact>> GetContactsByTagAsync(int tagId);

        Task<Contact> GetContactByIdAsync(int id);

        Task<Tag> AddTagToContactAsync(int contactId, Tag tag);

        Task RemoveTagFromContactAsync(int contactId, int tagId);
    }
}