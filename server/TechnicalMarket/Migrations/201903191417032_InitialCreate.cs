namespace TechnicalMarket.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Shops",
                c => new
                    {
                        ShopId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Age = c.Int(nullable: false),
                        Budget = c.Double(nullable: false),
                        Currency = c.Int(),
                    })
                .PrimaryKey(t => t.ShopId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Shops");
        }
    }
}
