using System.Collections.Generic;
using Avnon.AddressBook.Api.Model;
using System.Threading.Tasks;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface IContactRepository
    {
        
        Task<IEnumerable<Contact>> FindContactsAsync(string searchText);

        Task<Contact> GetContactByIdAsync(int id);
        
    }
}