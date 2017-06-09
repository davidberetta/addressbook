using System;
using System.Collections.Generic;
using System.Data;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;
using System.Threading.Tasks;
using Dapper;

namespace Avnon.AddressBook.Api.Repository
{
    public class TagRepository : ITagRepository
    {
        private readonly IDbConnection _conn;

        public TagRepository(IDbConnection conn)
        {
            _conn = conn;
        }

        public async Task<int> AddTagAsync(string tagTitle)
        {
            var sp = "TAG_ADD_P";

            return await _conn.QueryFirstAsync<int>(sp, new {Title = tagTitle}, commandType: CommandType.StoredProcedure);
        }

        public async Task DeleteTagAsync(int tagId)
        {
            var sp = "TAG_DELETE_P";

            await _conn.ExecuteAsync(sp, new {TagId = tagId}, commandType: CommandType.StoredProcedure);
        }

        public async Task EditTagAsync(Tag tag)
        {
            var sp = "TAG_UPDATE_P";

            await _conn.ExecuteAsync(sp, tag, commandType:CommandType.StoredProcedure);
        }

        public async Task<Tag> GetTagByIdAsync(int tagId)
        {
            var sp = "TAG_GET_BY_ID_P";

            return (await _conn.QueryFirstAsync<Tag>(sp, new {TagId = tagId}, commandType: CommandType.StoredProcedure));
        }

        public async Task<IEnumerable<Tag>> GetTagsByTitleAsync(string title)
        {
            var sp = "TAGS_FIND_P";

            return (await _conn.QueryAsync<Tag>(sp, new { Title = title }, commandType: CommandType.StoredProcedure));
        }
    }
}