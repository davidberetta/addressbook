using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;
using Microsoft.AspNetCore.Identity;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<string> AddUserAsync(User user);

        Task UpdateUserAsync(User user);

        Task DeleteUserAsync(string userId);

        Task<IEnumerable<User>> GetAllUsersAsync();

        Task<User> GetUserByIdAsync(string userId);

        Task<User> GetUserByNameAsync(string username);

        Task<User> GetUserByEmailAsync(string email);

        Task<User> GetUserByLoginAsync(string loginProvider, string providerKey);

        Task AddUserLoginAsync(string userId, UserLoginInfo login);

        Task RemoveUserLoginAsync(string userId, string loginProvider, string providerKey);

        Task<IList<UserLoginInfo>> GetUserLoginsAsync(User user);

        Task AddRoleToUserAsync(User user, string roleName);

        Task RemoveRoleFromUserAsync(User user, string roleName);

        Task<IList<string>> GetUserRolesAsync(User user);

        Task<bool> UserHasRoleAsync(User user, string roleName);

        Task<IList<User>> GetUsersWithRoleAsync(string roleName);

    }
}
