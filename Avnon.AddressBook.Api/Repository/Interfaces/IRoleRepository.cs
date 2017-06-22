using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Repository.Interfaces
{
    public interface IRoleRepository
    {
        Task<string> AddRoleAsync(Role role);
        Task UpdateRoleAsync(Role role);
        Task DeleteRoleAsync(string roleId);
        Task<Role> GetRoleByIdAsync(string roleId);
        Task<Role> GetRoleByNameAsync(string roleName);
    }
}
