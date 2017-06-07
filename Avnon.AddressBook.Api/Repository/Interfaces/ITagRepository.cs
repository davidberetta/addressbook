using System.Collections.Generic;
using Avnon.AddressBook.Api.Model;
using System.Threading.Tasks;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface ITagRepository
    {
        Task<IEnumerable<Tag>> GetTagsByTitle(string title);

        Task<Tag> GetTagById(int tagId);

        Task<int> AddTag(Tag tag);

        Task<int> EditTag(Tag tag);
        
        Task<int> DeleteTag(int tagId);
    }
}