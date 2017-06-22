using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;
using Avnon.AddressBook.Api.Repository.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Avnon.AddressBook.Api
{
    public class UserStore : IUserStore<User>, IUserEmailStore<User>, IUserPasswordStore<User>, IUserLoginStore<User>, IUserRoleStore<User>
    {
        private readonly IUserRepository _userRepository;

        public UserStore(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task AddLoginAsync(User user, UserLoginInfo login, CancellationToken cancellationToken)
        {
            await _userRepository.AddUserLoginAsync(user.UserId, login);
        }

        public async Task<IdentityResult> CreateAsync(User user, CancellationToken cancellationToken)
        {
            var result = await _userRepository.AddUserAsync(user);

            return IdentityResult.Success;
        }

        public async Task<IdentityResult> DeleteAsync(User user, CancellationToken cancellationToken)
        {
            await _userRepository.DeleteUserAsync(user.UserId);

            return IdentityResult.Success;
        }

        public async Task<User> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken)
        {
            return (await _userRepository.GetUserByEmailAsync(normalizedEmail));
        }

        public async Task<User> FindByIdAsync(string userId, CancellationToken cancellationToken)
        {
            return (await _userRepository.GetUserByIdAsync(userId));
        }

        public async Task<User> FindByLoginAsync(string loginProvider, string providerKey, CancellationToken cancellationToken)
        {
            return await _userRepository.GetUserByLoginAsync(loginProvider, providerKey);
        }

        public async Task<User> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
        {
            return await _userRepository.GetUserByNameAsync(normalizedUserName);
        }

        public async Task<string> GetEmailAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(user.Email);
        }

        public async Task<bool> GetEmailConfirmedAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(true);
        }

        public async Task<IList<UserLoginInfo>> GetLoginsAsync(User user, CancellationToken cancellationToken)
        {
            return await _userRepository.GetUserLoginsAsync(user);
        }

        public async Task<string> GetNormalizedEmailAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(user.Email.ToUpper());
        }

        public async Task<string> GetNormalizedUserNameAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(user.UserName.ToUpper());
        }

        public async Task<string> GetPasswordHashAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(user.PasswordHash);
        }

        public async Task<string> GetUserIdAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(user.UserId);
        }

        public async Task<string> GetUserNameAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(user.UserName);
        }

        public async Task<bool> HasPasswordAsync(User user, CancellationToken cancellationToken)
        {
            return await Task.FromResult(user.PasswordHash != null);
        }

        public async Task RemoveLoginAsync(User user, string loginProvider, string providerKey, CancellationToken cancellationToken)
        {
            await _userRepository.RemoveUserLoginAsync(user.UserId, loginProvider, loginProvider);
        }

        public async Task SetEmailAsync(User user, string email, CancellationToken cancellationToken)
        {
            await Task.FromResult(user.Email = email);
        }

        public async Task SetEmailConfirmedAsync(User user, bool confirmed, CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
        }

        public async Task SetNormalizedEmailAsync(User user, string normalizedEmail, CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
        }

        public async Task SetNormalizedUserNameAsync(User user, string normalizedName, CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
        }

        public async Task SetPasswordHashAsync(User user, string passwordHash, CancellationToken cancellationToken)
        {
            await Task.FromResult(user.PasswordHash = passwordHash);
        }

        public async Task SetUserNameAsync(User user, string userName, CancellationToken cancellationToken)
        {
            await Task.FromResult(user.UserName = userName);
        }

        public async Task<IdentityResult> UpdateAsync(User user, CancellationToken cancellationToken)
        {
            await _userRepository.UpdateUserAsync(user);

            return IdentityResult.Success;
        }

        public async Task AddToRoleAsync(User user, string roleName, CancellationToken cancellationToken)
        {
            await _userRepository.AddRoleToUserAsync(user, roleName);
        }

        public async Task RemoveFromRoleAsync(User user, string roleName, CancellationToken cancellationToken)
        {
            await _userRepository.RemoveRoleFromUserAsync(user, roleName);
        }

        public async Task<IList<string>> GetRolesAsync(User user, CancellationToken cancellationToken)
        {
            return await _userRepository.GetUserRolesAsync(user);
        }

        public async Task<bool> IsInRoleAsync(User user, string roleName, CancellationToken cancellationToken)
        {
            return await _userRepository.UserHasRoleAsync(user, roleName);
        }

        public async Task<IList<User>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
        {
            return await _userRepository.GetUsersWithRoleAsync(roleName);
        }

        public void Dispose()
        {

        }
        
    }
}
