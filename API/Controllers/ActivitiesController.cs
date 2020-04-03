using Application.Activity;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;

        }
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetList()
        {
            return await _mediator.Send(new ListActivity.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetDetail(Guid id)
        {
            return await _mediator.Send(new Details.Query { Id = id });
        }
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> EditList(Guid id, Edit.Command command)
        {
            command.id = id;
            return await _mediator.Send(command);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> DeleteList(Guid id)
        {
            return await _mediator.Send(new Delete.Command { Id = id });
        }
    }

}
