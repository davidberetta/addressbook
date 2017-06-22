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
    public class RoleStore : IRoleStore<Role>
    {
        private readonly IRoleRepository _roleRepository;

        public RoleStore(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public async Task<IdentityResult> CreateAsync(Role role, CancellationToken cancellationToken)
        {
            await _roleRepository.AddRoleAsync(role);

            return IdentityResult.Success;
        }

        public async Task<IdentityResult> DeleteAsync(Role role, CancellationToken cancellationToken)
        {
            await _roleRepository.DeleteRoleAsync(role.RoleId);

            return IdentityResult.Success;
        }

        public async Task<Role> FindByIdAsync(string roleId, CancellationToken cancellationToken)
        {
            return await _roleRepository.GetRoleByIdAsync(roleId);
        }

        public async Task<Role> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            return await _roleRepository.GetRoleByNameAsync(normalizedRoleName);
        }

        public async Task<string> GetNormalizedRoleNameAsync(Role role, CancellationToken cancellationToken)
        {
            return await Task.FromResult(role.RoleName.ToUpper());
        }

        public async Task<string> GetRoleIdAsync(Role role, CancellationToken cancellationToken)
        {
            return await Task.FromResult(role.RoleId);
        }

        public async Task<string> GetRoleNameAsync(Role role, CancellationToken cancellationToken)
        {
            return await Task.FromResult(role.RoleName);
        }

        public async Task SetNormalizedRoleNameAsync(Role role, string normalizedName, CancellationToken cancellationToken)
        {
            await Task.CompletedTask;
        }

        public async Task SetRoleNameAsync(Role role, string roleName, CancellationToken cancellationToken)
        {
            role.RoleName = roleName;
            await _roleRepository.UpdateRoleAsync(role);
        }

        public async Task<IdentityResult> UpdateAsync(Role role, CancellationToken cancellationToken)
        {
            await _roleRepository.UpdateRoleAsync(role);

            return IdentityResult.Success;
        }

        public void Dispose()
        {
        }

    }
}
