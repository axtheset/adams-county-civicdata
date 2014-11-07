      $(document).ready(function() {
        
        var resourceId = "20ce4f36-9e6b-47f9-80b2-1b773b21cdba";
        var baseURI = "http://www.civicdata.com/api/action/datastore_search_sql?sql=";
         
        // Helper function to make request for JSONP.
        function requestJSON(url, callback) {
          $.ajax({
            beforeSend: function(){
            // Handle the beforeSend event
            },
            url: url,
            complete: function(xhr) {
              callback.call(null, xhr.responseJSON);
               
            }
          });
        }


        var urlYearCompareQuery = "SELECT substring(\"ApplicationDate\" from 1 for 4) as Year, substring(\"ApplicationDate\" from 6 for 2) as Month, count(*) as Count from \"resource_id\" group by Year, Month order by Year, Month";

        var urlYearCompare = baseURI + encodeURIComponent(urlYearCompareQuery.replace("resource_id",resourceId));

        requestJSON(urlYearCompare, function(json) {
          var records = json.result.records
          var count00 = ['2000'];
          var count01 = ['2001'];
          var count02 = ['2002'];
          var count03 = ['2003'];
          var count04 = ['2004'];
          var count05 = ['2005'];
          var count06 = ['2006'];
          var count07 = ['2007'];
          var count08 = ['2008'];
          var count09 = ['2009'];
          var count10 = ['2010'];
          var count11 = ['2011'];
          var count12 = ['2012'];
          var count13 = ['2013'];
          var count14 = ['2014'];
          for(var i=0; i<records.length; i++) {
            if (records[i].year == "2000")
              count00.push(parseInt(records[i].count));
            if (records[i].year == "2001")
              count01.push(parseInt(records[i].count));
            if (records[i].year == "2002")
              count02.push(parseInt(records[i].count));
            if (records[i].year == "2003")
              count03.push(parseInt(records[i].count));
            if (records[i].year == "2004")
              count04.push(parseInt(records[i].count));
            if (records[i].year == "2005")
              count05.push(parseInt(records[i].count));
            if (records[i].year == "2006")
              count06.push(parseInt(records[i].count));
            if (records[i].year == "2007")
              count07.push(parseInt(records[i].count));
            if (records[i].year == "2008")
              count08.push(parseInt(records[i].count));
            if (records[i].year == "2009")
              count09.push(parseInt(records[i].count));
            if (records[i].year == "2010")
              count10.push(parseInt(records[i].count));
            if (records[i].year == "2011")
              count11.push(parseInt(records[i].count));
            if (records[i].year == "2012")
              count12.push(parseInt(records[i].count));
            if (records[i].year == "2013")
              count13.push(parseInt(records[i].count));
            if (records[i].year == "2014")
              count14.push(parseInt(records[i].count));
          }

            var chart = c3.generate({
              bindto: '#chartYear',
              data: {
                  columns: [
                      //['x', '01', '02','03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                      count00,
                      count01,
                      count02,
                      count03,
                      count04,
                      count05,
                      count06,
                      count07,
                      count08,
                      count09,
                      count10,
                      count11,
                      count12,
                      count13,
                      count14
                  ]
              },
              axis: {
                  x: {
                      type: 'categorized',
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              }
            });
          
        });

        var urlEnfYearCompareQuery = "SELECT substring(\"CaseOpenDate\" from 1 for 4) as Year, substring(\"CaseOpenDate\" from 6 for 2) as Month, count(*) as Count from \"efedae5d-354c-46d6-9ee5-8d93a3d3f82d\" group by Year, Month order by Year, Month";

        var urlEnfYearCompare = baseURI + encodeURIComponent(urlYearCompareQuery.replace("resource_id",resourceId));

        requestJSON(urlEnfYearCompare, function(json) {
          var records = json.result.records
          var count00 = ['2000'];
          var count01 = ['2001'];
          var count02 = ['2002'];
          var count03 = ['2003'];
          var count04 = ['2004'];
          var count05 = ['2005'];
          var count06 = ['2006'];
          var count07 = ['2007'];
          var count08 = ['2008'];
          var count09 = ['2009'];
          var count10 = ['2010'];
          var count11 = ['2011'];
          var count12 = ['2012'];
          var count13 = ['2013'];
          var count14 = ['2014'];
          for(var i=0; i<records.length; i++) {
            if (records[i].year == "2000")
              count00.push(parseInt(records[i].count));
            if (records[i].year == "2001")
              count01.push(parseInt(records[i].count));
            if (records[i].year == "2002")
              count02.push(parseInt(records[i].count));
            if (records[i].year == "2003")
              count03.push(parseInt(records[i].count));
            if (records[i].year == "2004")
              count04.push(parseInt(records[i].count));
            if (records[i].year == "2005")
              count05.push(parseInt(records[i].count));
            if (records[i].year == "2006")
              count06.push(parseInt(records[i].count));
            if (records[i].year == "2007")
              count07.push(parseInt(records[i].count));
            if (records[i].year == "2008")
              count08.push(parseInt(records[i].count));
            if (records[i].year == "2009")
              count09.push(parseInt(records[i].count));
            if (records[i].year == "2010")
              count10.push(parseInt(records[i].count));
            if (records[i].year == "2011")
              count11.push(parseInt(records[i].count));
            if (records[i].year == "2012")
              count12.push(parseInt(records[i].count));
            if (records[i].year == "2013")
              count13.push(parseInt(records[i].count));
            if (records[i].year == "2014")
              count14.push(parseInt(records[i].count));
          }

            var chart = c3.generate({
              bindto: '#chartEnfYear',
              data: {
                  columns: [
                      //['x', '01', '02','03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                      count00,
                      count01,
                      count02,
                      count03,
                      count04,
                      count05,
                      count06,
                      count07,
                      count08,
                      count09,
                      count10,
                      count11,
                      count12,
                      count13,
                      count14
                  ]
              },
              axis: {
                  x: {
                      type: 'categorized',
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              }
            });
          
        });                

        var urlPieQuery = "SELECT \"PermitType\" as RecordType, count(*) as Count from \"resource_id\" where \"PermitType\" != \'\' group by RecordType order by Count desc";

        var urlPie = baseURI + encodeURIComponent(urlPieQuery.replace("resource_id",resourceId));

            // Draw the bar chart.
        requestJSON(urlPie, function(json) {
          var records = json.result.records
          var pieCounts = [];
          for(var i=0; i<records.length; i++) {
            pieCounts.push([records[i].recordtype,parseInt(records[i].count)]);
          }
          var pieChart = c3.generate({
              bindto: '#pieChart',
              data: {
                  // iris data from R
                  columns: pieCounts,
                  type : 'pie',
              },
              pie: {
                  onclick: function (d, i) { console.log(d, i); },
                  onmouseover: function (d, i) { console.log(d, i); },
                  onmouseout: function (d, i) { console.log(d, i); }
              }
          });

          });

        var enfLetterTypesQuery = "SELECT \"Letter Type\", count(*) as Count from \"efedae5d-354c-46d6-9ee5-8d93a3d3f82d\" group by \"Letter Type\" order by Count desc";

        var enfLetterTypes = baseURI + encodeURIComponent(enfLetterTypesQuery.replace("resource_id",resourceId));
            // Draw the bar chart.
        requestJSON(enfLetterTypes, function(json) {
          var records = json.result.records    
          
          var letterTypes = [];

          //Get a distinct list of neighborhoods
          for(var i=0; i<records.length; i++) {
            letterTypes.push([records[i]["Letter Type"], records[i].count]);
          }
          console.log(letterTypes);
          var chart = c3.generate({
              bindto: '#letterTypes',
              data: {
                  columns: letterTypes,
                  type : 'donut'
              },
              donut: {
                  title: "Letter Types"
              }
          });
              
          });


        
        var onlineByYearQuery = "SELECT substring(\"ApplicationDate\" from 1 for 4) as Year, \"Applied Online\", count(*) as Count from \"20ce4f36-9e6b-47f9-80b2-1b773b21cdba\" WHERE \"Applied Online\" != '' and \"ApplicationDate\" >= '2011-06-01' group by Year, \"Applied Online\" order by Year, \"Applied Online\"";

        var onlineByYear = baseURI + encodeURIComponent(onlineByYearQuery.replace("resource_id",resourceId));

        //var onlineByYear = 'http://www.civicdata.com/api/action/datastore_search_sql?sql=SELECT%20substring(%22DATE%20OPENED%22%20from%201%20for%204)%20as%20Year,%20%22CREATED%20ONLINE%22,%20count(*)%20as%20Count%20from%20%22e741edf8-04ad-450d-bc62-6684a7a427dd%22%20WHERE%20substring(%22DATE%20OPENED%22%20from%201%20for%204)%20%3E=%20%272011%27%20group%20by%20Year,%20%22CREATED%20ONLINE%22%20order%20by%20Year,%20%22CREATED%20ONLINE%22';

            // Draw the bar chart.
        requestJSON(onlineByYear, function(json) {
          var records = json.result.records
          var online = ['Online'];
          var paper = ['Paper'];
          online.push(0);
          for(var i=0; i<records.length; i++) {
            if (records[i]["Applied Online"] == "Y")
              online.push(parseInt(records[i].count))
            else
              paper.push(parseInt(records[i].count))
          }

          var onlineByYear = c3.generate({
             bindto: '#onlineByYearAll',
             data: {
                  columns: [
                      online,//['Online', 300, 350, 300, 0, 0, 0 ],
                      paper//['Paper', 130, 100, 140, 200, 150, 50]
                  ],
                  types: {
                      Online: 'area-spline',
                      Paper: 'area-spline'
                  },
                  
              },
              axis: {
                    x: {
                        type: 'category',
                        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
                    }
                }
          });
              
          });

      });