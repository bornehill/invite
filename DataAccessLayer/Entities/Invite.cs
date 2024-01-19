
namespace DataAccessLayer.Entities
{
    public class Invite
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
