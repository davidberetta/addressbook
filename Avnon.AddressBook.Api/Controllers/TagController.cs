using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avnon.AddressBook.Api.Business.Interfaces;
using Avnon.AddressBook.Api.Model;
using Microsoft.AspNetCore.Mvc;

namespace Avnon.AddressBook.Api.Controllers
{
    [Route("api/[controller]")]
    public class TagController : Controller
    {
        private readonly ITagService _tagService;

        public TagController(ITagService tagService)
        {
            _tagService = tagService;
        }

        // GET api/tag?title=Mentor
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string title)
        {
            var result = await _tagService.GetTagsByTitle(title);

            return Ok(result);
        }

        // GET api/tag/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _tagService.GetTagById(id);

            return Ok(result);
        }

        // POST api/tag
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Tag tag)
        {
            await _tagService.EditTag(tag);

            return Ok();
        }

        // PUT api/tag
        [HttpPut()]
        public async Task<IActionResult> Put([FromBody]Tag tag)
        {
            var result = await _tagService.AddTag(tag);

            return Ok(result);
        }

        // DELETE api/tag/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _tagService.DeleteTag(id);

            return Ok();
        }
    }
}
