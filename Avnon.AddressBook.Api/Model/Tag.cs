namespace Avnon.AddressBook.Api.Model
{
    public class Tag
    {

        public Tag()
        {
        }

        public Tag(int tagId, string title)
        {
            TagId = tagId;
            Title = title;
        }

        public int TagId { get; set; }
        public string Title { get; set; }
    }
}