using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Broker.Models
{
    public class Share
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public Country Country { get; set; }
        public List<HistoryPriceShare> HistoryPriceShares { get; set; }
        public List<PortfolioShare> PortfolioShares { get; set; }
        public Share()
        {
            HistoryPriceShares = new List<HistoryPriceShare>();
            PortfolioShares = new List<PortfolioShare>();
        }
    }
}
