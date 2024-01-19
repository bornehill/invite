using DataAccessLayer.Entities;
using DataAccessLayer.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace invite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvitesController : ControllerBase
    {
        private readonly ILogger<InvitesController> _logger;

        public InvitesController(ILogger<InvitesController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetAll")]
        public ActionResult GetAll([FromServices] IInvitesRepository invites)
        { 
            return Ok(invites.List());
        }

        [HttpGet("{inviteId}",Name = "GetById")]
        public ActionResult GetById([FromRoute] int inviteId, [FromServices] IInvitesRepository invites)
        {
            var find = invites.Get(inviteId);

            if (find == null)
                return BadRequest();

            return Ok(find);
        }

        [HttpDelete("{inviteId}", Name = "DeleteById")]
        public ActionResult DeleteById([FromRoute] int inviteId, [FromServices] IInvitesRepository invites)
        {
            var find = invites.Get(inviteId);

            if (find == null)
                return BadRequest();

            invites.Delete(inviteId);

            return Ok(find);
        }

        [HttpPost(Name = "AddInvite")]
        public ActionResult AddInvite([FromBody] Invite invite, [FromServices] IInvitesRepository invites)
        {
            var id = invites.Upsert(invite);

            return Ok(id);
        }
    }
}
