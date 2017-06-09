using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Business.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Avnon.AddressBook.Api.Model;

namespace Avnon.AddressBook.Api.Controllers
{
    [EnableCors("AllowAll")]
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
            var contacts = (await _contactService.FindContactsAsync(searchText ?? string.Empty)).ToList();

            return Ok(contacts);
        }

        // GET api/contact/tag/5
        [HttpGet("tag/{tagId}")]
        public async Task<IActionResult> GetContactsByTagAsync(int tagId)
        {
            var contacts = (await _contactService.GetContactsByTagAsync(tagId)).ToList();

            return Ok(contacts);
        }

        // GET api/contact/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContactByIdAsync(int id)
        {
            var contact = await _contactService.GetContactByIdAsync(id);

            return Ok(contact);
        }

        // PUT api/contact/5/tag
        [HttpPut("{contactId}/tag")]
        public async Task<IActionResult> AddTagToContactAsync(int contactId, [FromBody]Tag tag)
        {
            var newTag = await _contactService.AddTagToContactAsync(contactId, tag);

            return Ok(newTag);
        }

        // DELETE api/contact/5/tag/2
        [HttpDelete("{contactId}/tag/{tagId}")]
        public async Task<IActionResult> RemoveTagFromContactAsync(int contactId, int tagId)
        {
            await _contactService.RemoveTagFromContactAsync(contactId, tagId);

            return Ok();
        }

    }
}
