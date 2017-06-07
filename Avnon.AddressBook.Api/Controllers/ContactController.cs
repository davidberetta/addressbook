using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Avnon.AddressBook.Api.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // GET api/contact/dav
        [HttpGet("")]
        public async Task<IActionResult> FindContactsAsync([FromQuery] string searchText)
        {
            var contacts = (await _contactService.FindAllContactsAsync(searchText ?? string.Empty)).ToList();

            return Ok(contacts);
        }

        // GET api/contact/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContactById(int id)
        {
            var contact = await _contactService.GetContactByIdAsync(id);

            return Ok(contact);
        }

    }
}
