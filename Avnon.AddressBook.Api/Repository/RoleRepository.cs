using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;
using Dapper;

namespace Avnon.AddressBook.Api.Repository
{
    public class RoleRepository : IRoleRepository
    {
        private readonly IDbConnection _conn;

        public RoleRepository(IDbConnection conn)
        {
            _conn = conn;
        }

        public async Task<string> AddRoleAsync(Role role)
        {
            role.RoleId = Guid.NewGuid().ToString();

            var sp = "ROLE_ADD_P";

            await _conn.ExecuteAsync(sp, role, commandType: CommandType.StoredProcedure);

            return role.RoleId;
        }

        public async Task DeleteRoleAsync(string roleId)
        {
            var sp = "ROLE_DELETE_P";

            await _conn.ExecuteAsync(sp, new { RoleId = roleId }, commandType: CommandType.StoredProcedure);
        }

        public async Task<Role> GetRoleByIdAsync(string roleId)
        {
            var sp = "ROLE_GET_BY_ID_P";

            return await _conn.QueryFirstOrDefaultAsync<Role>(sp, new { RoleId = roleId }, commandType: CommandType.StoredProcedure);
        }

        public async Task<Role> GetRoleByNameAsync(string roleName)
        {
            var sp = "ROLE_GET_BY_NAME_P";

            return await _conn.QueryFirstOrDefaultAsync<Role>(sp, new { RoleName = roleName }, commandType: CommandType.StoredProcedure);
        }

        public async Task UpdateRoleAsync(Role role)
        {
            var sp = "ROLE_UPDATE_P";

            await _conn.ExecuteAsync(sp, role, commandType: CommandType.StoredProcedure);
        }
    }
}
