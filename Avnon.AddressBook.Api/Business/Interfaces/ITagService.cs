using System.Collections.Generic;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Business.Interfaces
{
    public interface ITagService
    {
        Task<IEnumerable<Tag>> GetTagsByTitleAsync(string title);

        Task<Tag> GetTagByIdAsync(int tagId);

        Task<Tag> AddTagAsync(string tagTitle);

        Task EditTagAsync(Tag tag);

        Task DeleteTagAsync(int tagId);
    }
}