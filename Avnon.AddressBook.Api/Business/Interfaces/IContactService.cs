using System.Collections.Generic;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Business.Interfaces
{
    public interface IContactService
    {

        Task<IEnumerable<Contact>> FindAllContactsAsync(string searchText);

        Task<Contact> GetContactByIdAsync(int id);
    }
}