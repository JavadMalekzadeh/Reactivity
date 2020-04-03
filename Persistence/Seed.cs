using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext dbContext)
        {
            if (!dbContext.Activities.Any())
            {
                var activities = new List<Activity>{
                   new Activity{
                       Title="future Activity 1",
                       Description="Activity 5 months in future",
                       Date=DateTime.Now.AddMonths(5),
                       Category="drinks",
                       City="London",
                       Venue="Just another Pub"
                   },
                   new Activity{
                       Title="future Activity 2",
                       Description="Activity 10 months in future",
                       Date=DateTime.Now.AddMonths(10),
                       Category="clothes",
                       City="Paris",
                       Venue="Just another Store"
                   }

                };
                dbContext.Activities.AddRange(activities);
                dbContext.SaveChanges();
            }
        }
    }
}