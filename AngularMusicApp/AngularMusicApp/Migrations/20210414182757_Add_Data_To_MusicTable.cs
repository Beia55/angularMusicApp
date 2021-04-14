using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularMusicApp.Migrations
{
    public partial class Add_Data_To_MusicTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Song",
                columns: new[] { "ID", "Composer", "Name", "Year" },
                values: new object[] { new Guid("551e9dab-b73e-4322-8200-bfab4a214d9f"), "Whisnants", "I'll Live in Glory", 2007 });

            migrationBuilder.InsertData(
                table: "Song",
                columns: new[] { "ID", "Composer", "Name", "Year" },
                values: new object[] { new Guid("d20287c1-f990-46d2-9698-6897f81e23e0"), "Casting Crowns", "East to West", 2010 });

            migrationBuilder.InsertData(
                table: "Song",
                columns: new[] { "ID", "Composer", "Name", "Year" },
                values: new object[] { new Guid("5dcca768-86e0-4745-a93d-9f2e268a75c1"), "Kutless", "What Faith Can Do", 2009 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Song",
                keyColumn: "ID",
                keyValue: new Guid("551e9dab-b73e-4322-8200-bfab4a214d9f"));

            migrationBuilder.DeleteData(
                table: "Song",
                keyColumn: "ID",
                keyValue: new Guid("5dcca768-86e0-4745-a93d-9f2e268a75c1"));

            migrationBuilder.DeleteData(
                table: "Song",
                keyColumn: "ID",
                keyValue: new Guid("d20287c1-f990-46d2-9698-6897f81e23e0"));
        }
    }
}
