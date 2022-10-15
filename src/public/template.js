const { version } = require('../../package.json');

const mainApiTemplate = (req, res) => {
  const hostProtocol = process.env.NODE_ENV === 'local' ? 'http' : 'https';
  const host = `${hostProtocol}://${req.headers.host}`;

  res.send(`
      <!DOCTYPE html>
        <html>
        <head>
        <style>
        body { 
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        #customers {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 60%;
        }
        
        #customers td, #customers th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #customers tr:nth-child(even){background-color: #f2f2f2;}
        
        #customers tr:hover {background-color: #ddd;}
        
        #customers th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #04AA6D;
          color: white;
        }
        </style>
        </head>
        <body>
        
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Url</th>
          </tr>
          <tr>
            <td>Version</td>
            <td>${version}</td>
          </tr> 
          <tr>
            <td>Host</td>
            <td><a href="${host}" target="_blank">${host}</a></td> 
          </tr>
            <tr>
            <td>Docs</td>
            <td><a target="_blank">TODO</a></td>
          </tr>        
        </table>        
        </body>
      </html>
    `);
};

module.exports = mainApiTemplate;
