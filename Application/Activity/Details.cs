using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activity
{
    public class Details
    {

        public class Query : IRequest<Domain.Activity>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Domain.Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Domain.Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}