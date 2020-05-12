using Broker.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Broker.DAL
{
    public class BrokerContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Share> Shares { get; set; }
        public DbSet<PortfolioShare> PortfolioShares { get; set; }
        public DbSet<HistoryPriceShare> HistoryPriceShares { get; set; }
        public DbSet<Country> Countries { get; set; }


        public BrokerContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Один к одному
            modelBuilder
            .Entity<User>()
            .HasOne(u => u.Portfolio)
            .WithOne(p => p.User)
            .HasForeignKey<Portfolio>(p => p.UserId);

            //Многие ко многим
            modelBuilder.Entity<PortfolioShare>()
            .HasKey(t => new { t.PortfolioId, t.ShareId });

            modelBuilder.Entity<PortfolioShare>()
            .HasOne(sc => sc.Portfolio)
            .WithMany(s => s.PortfolioShares)
            .HasForeignKey(sc => sc.PortfolioId);

            modelBuilder.Entity<PortfolioShare>()
           .HasOne(sc => sc.Share)
           .WithMany(s => s.PortfolioShares)
           .HasForeignKey(sc => sc.ShareId);
        }
    }
}
