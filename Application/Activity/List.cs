using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Activity
{
    public class ListActivity
    {
        public class Query : IRequest<List<Domain.Activity>> { }
        public class Handler : IRequestHandler<Query, List<Domain.Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<Domain.Activity>> Handle(Query request,
            CancellationToken cancellationToken)
            {
                var Activities = await _context.Activities.ToListAsync();
                return Activities;
            }
        }
    }
}