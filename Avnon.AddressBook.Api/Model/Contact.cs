using System.Collections.Generic;

namespace Avnon.AddressBook.Api.Model
{
    public class Contact
    {
        public int ContactId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Company { get; set; }
        public string JobDescription { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string LinkedIn { get; set; }
        public string Skype { get; set; }

        public ICollection<Tag> Tags { get; set; }
    }
}