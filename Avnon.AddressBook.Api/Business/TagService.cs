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

        public async Task<Tag> AddTagAsync(string tagTitle)
        {
            var tagId = await _repository.AddTagAsync(tagTitle);

            return new Tag(tagId, tagTitle);
        }

        public async Task DeleteTagAsync(int tagId)
        {
            await _repository.DeleteTagAsync(tagId);
        }

        public async Task EditTagAsync(Tag tag)
        {
            await _repository.EditTagAsync(tag);
        }

        public async Task<Tag> GetTagByIdAsync(int tagId)
        {
            var tag = await _repository.GetTagByIdAsync(tagId);

            return tag;
        }

        public async Task<IEnumerable<Tag>> GetTagsByTitleAsync(string title)
        {
            var tag = await _repository.GetTagsByTitleAsync(title);

            return tag;
        }
    }
}