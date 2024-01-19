using DataAccessLayer.Data;
using DataAccessLayer.Entities;

namespace DataAccessLayer.Interfaces
{
    public class InvitesRepository : IInvitesRepository
    {
        private readonly AppDbContext _dbContext;

        public InvitesRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Delete(int id)
        {
            var category = _dbContext.Invites.Find(id);
            if (category != null)
            {
                _dbContext.Invites.Remove(category);
            }
            return _dbContext.SaveChanges();
        }

        public Invite? Get(int id)
        {
            return _dbContext.Invites.FirstOrDefault(i => i.Id == id);
        }

        public IEnumerable<Invite> List()
        {
            return _dbContext.Invites;
        }

        public int Upsert(Invite item)
        {
            var isNewCategory = !_dbContext.Invites.Any(x => x.Id == item.Id);
            if (isNewCategory)
            {
                _dbContext.Invites.Add(item);
            }
            else
            {
                _dbContext.Invites.Update(item);
            }
            return _dbContext.SaveChanges();
        }
    }
}
