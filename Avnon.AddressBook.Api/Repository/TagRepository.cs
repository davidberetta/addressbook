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

        public async Task<int> AddTag(Tag tag)
        {
            var sp = "TAG_ADD_P";

            return await _conn.ExecuteAsync(sp, new {Title = tag.Title}, commandType: CommandType.StoredProcedure);
        }

        public async Task<int> DeleteTag(int tagId)
        {
            var sp = "TAG_DELETE_P";

            return await _conn.ExecuteAsync(sp, new {TagId = tagId}, commandType: CommandType.StoredProcedure);
        }

        public async Task<int> EditTag(Tag tag)
        {
            var sp = "TAG_UPDATE_P";

            return await _conn.ExecuteAsync(sp, tag, commandType:CommandType.StoredProcedure);
        }

        public async Task<Tag> GetTagById(int tagId)
        {
            var sp = "TAG_GET_BY_ID_P";

            return (await _conn.QueryFirstAsync<Tag>(sp, new {TagId = tagId}, commandType: CommandType.StoredProcedure));
        }

        public async Task<IEnumerable<Tag>> GetTagsByTitle(string title)
        {
            var sp = "TAGS_FIND_P";

            return (await _conn.QueryAsync<Tag>(sp, new { Title = title }, commandType: CommandType.StoredProcedure));
        }
    }
}