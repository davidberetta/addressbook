using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Business.Interfaces;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;

namespace Avnon.AddressBook.Api.Business
{
    public class TagService : ITagService
    {
        private readonly ITagRepository _repository;

        public TagService(ITagRepository repository)
        {
            _repository = repository;
        }

        public async Task<Tag> AddTag(Tag tag)
        {
            var tagId = await _repository.AddTag(tag);

            return new Tag()
            {
                TagId = tagId,
                Title = tag.Title
            };
        }

        public async Task DeleteTag(int tagId)
        {
            await _repository.DeleteTag(tagId);
        }

        public async Task EditTag(Tag tag)
        {
            await _repository.EditTag(tag);
        }

        public async Task<Tag> GetTagById(int tagId)
        {
            var tag = await _repository.GetTagById(tagId);

            return tag;
        }

        public async Task<IEnumerable<Tag>> GetTagsByTitle(string title)
        {
            var tag = await _repository.GetTagsByTitle(title);

            return tag;
        }
    }
}