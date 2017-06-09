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

        public async Task<Tag> AddTagToContactAsync(int contactId, Tag tag)
        {
            var tagId = await _repository.AddTagToContactAsync(contactId, tag);

            return new Tag(tagId, tag.Title);
        }

        public async Task RemoveTagFromContactAsync(int contactId, int tagId)
        {
            await _repository.RemoveTagFromContactAsync(contactId, tagId);
        }

        public async Task<IEnumerable<Contact>> FindContactsAsync(string searchText)
        {
            var contacts = await _repository.FindContactsAsync(searchText);

            return contacts;
        }

        public async Task<Contact> GetContactByIdAsync(int id)
        {
            var contact = await _repository.GetContactByIdAsync(id);

            return contact;
        }

        public async Task<IEnumerable<Contact>> GetContactsByTagAsync(int tagId)
        {
            var contacts = await _repository.GetContactsByTagAsync(tagId);

            return contacts;
        }
    }
}