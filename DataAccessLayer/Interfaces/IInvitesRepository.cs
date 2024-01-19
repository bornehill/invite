using DataAccessLayer.Entities;

namespace DataAccessLayer.Interfaces
{
    public interface IInvitesRepository
    {
        int Delete(int id);
        Invite? Get(int id);
        IEnumerable<Invite> List();
        int Upsert(Invite item);
    }
}
