using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Business.Interfaces;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;

namespace Avnon.AddressBook.Api.Business
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _repository;

        public ContactService(IContactRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Contact>> FindAllContactsAsync(string searchText)
        {
            var contacts = await _repository.FindContactsAsync(searchText);

            return contacts;
        }

        public async Task<Contact> GetContactByIdAsync(int id)
        {
            var contact = await _repository.GetContactByIdAsync(id);

            return contact;
        }
    }
}