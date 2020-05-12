using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Broker.Models;
using Broker.DAL;
using Microsoft.EntityFrameworkCore;

namespace Broker.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("api/getshares")]
        public JsonResult GetShares()
        {
            var Shares = new List<Share>();
            using (var db = new BrokerContext())
            {
                //var role1 = new Role() { Name = "Admin" };
                //db.Roles.Add(role1);
                //db.SaveChanges();
                Shares = db.Shares.Include(x => x.Country).Include(x => x.HistoryPriceShares).ToList();
            }
            return Json(Shares);
        }

        [Route("api/Get/Hello")]
        public JsonResult GetHello()
        {
            return Json("Hello");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
