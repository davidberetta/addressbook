using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;
using Microsoft.AspNetCore.Identity;
using Dapper;

namespace Avnon.AddressBook.Api.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IDbConnection _conn;

        public UserRepository(IDbConnection conn)
        {
            _conn = conn;
        }

        public async Task<string> AddUserAsync(User user)
        {
            if(string.IsNullOrEmpty(user.UserId) || !Guid.TryParse(user.UserId, out Guid guid))
                user.UserId = Guid.NewGuid().ToString();

            var sp = "USER_ADD_P";

            await _conn.ExecuteAsync(sp, user, commandType: CommandType.StoredProcedure);

            return user.UserId;
        }

        public async Task DeleteUserAsync(string userId)
        {
            var sp = "USER_DELETE_P";

            await _conn.ExecuteAsync(sp, new {UserId = userId}, commandType: CommandType.StoredProcedure);
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            var sp = "USERS_GET_ALL_P";

            return await _conn.QueryAsync<User>(sp, commandType: CommandType.StoredProcedure);
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            var sp = "USER_GET_BY_EMAIL_P";

            return await _conn.QueryFirstOrDefaultAsync<User>(sp, new {Email = email}, commandType: CommandType.StoredProcedure);
        }

        public async Task<User> GetUserByIdAsync(string userId)
        {
            var sp = "USER_GET_BY_ID_P";

            return await _conn.QueryFirstOrDefaultAsync<User>(sp, new {UserId = userId},
                commandType: CommandType.StoredProcedure);
        }

        public async Task UpdateUserAsync(User user)
        {
            var sp = "USER_UPDATE_P";

            await _conn.ExecuteAsync(sp, user, commandType: CommandType.StoredProcedure);
        }

        public async Task<User> GetUserByNameAsync(string username)
        {

            var sp = "USER_GET_BY_USERNAME_P";

            return await _conn.QueryFirstOrDefaultAsync<User>(sp, new {UserName = username},
                commandType: CommandType.StoredProcedure);
        }

        public async Task<IList<UserLoginInfo>> GetUserLoginsAsync(User user)
        {
            var sp = "USER_LOGINS_GET_P";

            var result = await _conn.QueryAsync<UserLoginInfo>(sp, new {UserId = user.UserId},
                commandType: CommandType.StoredProcedure);

            if (result == null)
                result = new List<UserLoginInfo>();

            return result.ToList();
        }

        public async Task<User> GetUserByLoginAsync(string loginProvider, string providerKey)
        {
            var sp = "USER_GET_BY_LOGIN_P";

            return await _conn.QueryFirstOrDefaultAsync<User>(sp, new {LoginProvider = loginProvider, ProviderKey = providerKey},
                commandType: CommandType.StoredProcedure);
        }

        public async Task RemoveUserLoginAsync(string userId, string loginProvider, string providerKey)
        {
            var sp = "USER_LOGIN_DELETE_P";

            await _conn.ExecuteAsync(sp, new { UserId = userId, LoginProvider = loginProvider, ProviderKey = providerKey },
                commandType: CommandType.StoredProcedure);
        }

        public async Task AddRoleToUserAsync(User user, string roleName)
        {
            var sp = "USER_ROLE_ADD_P";

            await _conn.ExecuteAsync(sp, new {UserId = user.UserId, RoleName = roleName}, commandType: CommandType.StoredProcedure);
        }

        public async Task RemoveRoleFromUserAsync(User user, string roleName)
        {
            var sp = "USER_ROLE_DELETE_P";

            await _conn.ExecuteAsync(sp, new { UserId = user.UserId, RoleName = roleName }, commandType: CommandType.StoredProcedure);
        }

        public async Task<IList<string>> GetUserRolesAsync(User user)
        {
            var sp = "USER_ROLES_GET_P";

            var result = await _conn.QueryAsync<string>(sp, new { UserId = user.UserId },
                commandType: CommandType.StoredProcedure);

            if(result == null)
                result = new List<string>();

            return result.ToList();
        }

        public async Task<bool> UserHasRoleAsync(User user, string roleName)
        {
            var sp = "USER_HAS_ROLE_P";

            return await _conn.QueryFirstOrDefaultAsync<bool>(sp, new { UserId = user.UserId, RoleName = roleName }, commandType: CommandType.StoredProcedure);
        }

        public async Task<IList<User>> GetUsersWithRoleAsync(string roleName)
        {
            var sp = "ROLE_USERS_GET_P";

            var result = await _conn.QueryAsync<User>(sp, new { RoleName = roleName }, commandType: CommandType.StoredProcedure);

            if (result == null)
                result = new List<User>();

            return result.ToList();
        }

        public async Task AddUserLoginAsync(string userId, UserLoginInfo login)
        {
            var sp = "USER_LOGIN_ADD_P";

            await _conn.ExecuteAsync(sp, new
                {
                    UserId = userId,
                    LoginProvider = login.LoginProvider,
                    ProviderKey = login.ProviderKey,
                    ProviderDisplayName = login.ProviderDisplayName,
                },
                commandType: CommandType.StoredProcedure);
        }
    }
}