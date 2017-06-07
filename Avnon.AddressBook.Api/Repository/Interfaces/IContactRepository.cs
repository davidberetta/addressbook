using System.Collections.Generic;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface IContactRepository
    {
        IEnumerable<Contact> GetAllContacts();
        
        IEnumerable<Contact> FindContacts(string searchString);

        Contact GetContactById(int id);
        
    }
}