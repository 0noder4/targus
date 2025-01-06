import Mailjet from "node-mailjet";

export async function POST(formData: Request) {
  const { name, surname, companyName, email, tel } = await formData.json();

  console.log(process.env.MJ_APIKEY_PRIVATE);
  const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC || "",
    process.env.MJ_APIKEY_PRIVATE || "",
  );

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "bartosz.kuklewski@best.pw.edu.pl",
          Name: "Targus",
        },
        To: [
          {
            Email: "bartosz.kuklewski@best.pw.edu.pl",
            Name: "Bartosz Kuklewski",
          },
        ],
        Subject: `⚠️ Nowa firemka [${companyName}] w twojej okolicy ⚠️`,
        TextPart: `Nowa firemka`,
        HTMLPart: `
        <div style="font-family: Courier New">
        <h1>Nowa firemka: ${companyName}</h1> 
        <h3>dane kontaktowe:</h3> 
          <ul style="list-style: circle">
            <li><b>imie:</b> ${name}</li>
            <li><b>nazwisko:</b> ${surname}</li>
            <li><b>numer telefonu:</b> ${tel}</li>
            <li><b>email:</b> ${email}</li>
          </ul>
        </div>`,
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });

  return new Response(JSON.stringify({ submitted: true }), {
    status: 200,
  });
}
