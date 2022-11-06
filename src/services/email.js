export const signUp = (data) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html
      data-editor-version="2"
      class="sg-campaigns"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            font-family: "Poppins", sans-serif;
            background-color: #f7f7f7;
            padding: 0px;
            margin: 0px;
          }
          table tr td {
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <table
          style="
            margin: 0px auto;
            width: 100%;
            max-width: 600px;
            padding-bottom: 50px;
            padding: 20px 25px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            line-height: 1.8;
          "
        >
          <tr>
            <td
              style="
                text-align: center;
                border-bottom: 1px dashed #5d616d;
                padding-bottom: 10px;
              "
            >
              <h1
                style="color: #64d71f; cursor: pointer; font-weight: 600; margin: 0"
              >
                ZOHO &nbsp;<span style="color: #333">Integration</span>
              </h1>
            </td>
          </tr>
    
          <tr>
            <td style="padding-top: 50px">Hey <b> ${data?.name} </b></td>
          </tr>
          <tr>
            <td style="padding-top: 10px; text-align: justify">
              In order to verify your account you have to verify its you, use below
              button to verify the account.
            </td>
          </tr>
    
          <tr>
            <td style="text-align: center; padding-top: 20px">
              <a
                style="
                  margin-top: 10px;
                  cursor: pointer;
                  border: 1px solid #64d71f;
                  padding: 6px 24px;
                  background: #64d71f;
                  border-radius: 5px;
                  color: #fff;
                  font-size: 18px;
                  max-width: 166px;
                  text-align: center;
                  width: 100%;
                  text-decoration: none;
                "
                href=${data?.url}
                >Verify Account</a
              >
            </td>
          </tr>
          <tr>
            <td style="padding-top: 20px"> <b> Cedcommerce dev team </b></td>
          </tr>
           <tr>
            <td style="padding-top: 10px; text-align: justify">
              copyright &copy;  ${new Date().getFullYear()}-${
    new Date().getFullYear() + 1
  }, All rights reserved
            </td>
          </tr>
        </table>
      </body>
    </html>
      `;
};

export const adsMailTemplate = (data) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html
      data-editor-version="2"
      class="sg-campaigns"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            font-family: "Poppins", sans-serif;
            background-color: #f7f7f7;
            padding: 0px;
            margin: 0px;
          }
          table tr td {
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <table
          style="
            margin: 0px auto;
            width: 100%;
            max-width: 600px;
            padding-bottom: 50px;
            padding: 20px 25px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            line-height: 1.8;
          "
        >
          <tr>
            <td
              style="
                text-align: center;
                border-bottom: 1px dashed #5d616d;
                padding-bottom: 10px;
              "
            >
              <h1
                style="color: #64d71f; cursor: pointer; font-weight: 600; margin: 0"
              >
                ZOHO &nbsp;<span style="color: #333">Integration</span>
              </h1>
            </td>
          </tr>
    
          <tr>
            <td style="padding-top: 50px">Hey <b> ${data?.name} </b></td>
          </tr>
          <tr>
            <td style="padding-top: 10px; text-align: justify">
              In order to verify your account you have to verify its you, use below
              button to verify the account.
            </td>
          </tr>
    
          <tr>
            <td style="text-align: center; padding-top: 20px">
              <a
                style="
                  margin-top: 10px;
                  cursor: pointer;
                  border: 1px solid #64d71f;
                  padding: 6px 24px;
                  background: #64d71f;
                  border-radius: 5px;
                  color: #fff;
                  font-size: 18px;
                  max-width: 166px;
                  text-align: center;
                  width: 100%;
                  text-decoration: none;
                "
                href=${data?.url}
                >Verify Account</a
              >
            </td>
          </tr>
          <tr>
            <td style="padding-top: 20px"> <b> Cedcommerce dev team </b></td>
          </tr>
           <tr>
            <td style="padding-top: 10px; text-align: justify">
              copyright &copy;  ${new Date().getFullYear()}-${
    new Date().getFullYear() + 1
  }, All rights reserved
            </td>
          </tr>
        </table>
      </body>
    </html>
      `;
};
