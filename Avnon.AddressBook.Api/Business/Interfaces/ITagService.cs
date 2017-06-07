using System.Collections.Generic;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Business.Interfaces
{
    public interface ITagService
    {
        Task<IEnumerable<Tag>> GetTagsByTitle(string title);

        Task<Tag> GetTagById(int tagId);

        Task<Tag> AddTag(Tag tag);

        Task EditTag(Tag tag);

        Task DeleteTag(int tagId);
    }
}