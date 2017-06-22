using System.Collections.Generic;
using Avnon.AddressBook.Api.Model;
using System.Threading.Tasks;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface IContactRepository
    {
        
        Task<IEnumerable<Contact>> FindContactsAsync(string searchText);

        Task<IEnumerable<Contact>> GetContactsByTagAsync(int tagId);

        Task<Contact> GetContactByIdAsync(int id);

        Task<int> AddTagToContactAsync(int contactId, Tag tag);

        Task RemoveTagFromContactAsync(int contactId, int tagId);

    }
}