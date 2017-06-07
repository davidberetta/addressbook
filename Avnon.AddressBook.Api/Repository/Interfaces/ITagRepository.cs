using System.Collections.Generic;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface ITagRepository
    {
        IEnumerable<Tag> GetAllTags();

        IEnumerable<Tag> GetTagsByTitle(string title);

        Tag GetTagById(int id);

        int AddTag(Tag tag);

        void EditTag(Tag tag);
        
        void DeleteTag(Tag tag);


    }
}