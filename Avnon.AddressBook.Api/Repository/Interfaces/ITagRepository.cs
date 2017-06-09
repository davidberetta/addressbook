using System.Collections.Generic;
using Avnon.AddressBook.Api.Model;
using System.Threading.Tasks;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface ITagRepository
    {
        Task<IEnumerable<Tag>> GetTagsByTitleAsync(string title);

        Task<Tag> GetTagByIdAsync(int tagId);

        Task<int> AddTagAsync(string tagTitle);

        Task EditTagAsync(Tag tag);
        
        Task DeleteTagAsync(int tagId);
    }
}