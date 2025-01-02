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
            Email: "djbartox09@gmail.com",
            Name: "Bartosz Kuklewski",
          },
        ],
        Subject: `⚠️ Nowa firemka [${companyName}] w twojej okolicy ⚠️`,
        TextPart: `Nowa firemka`,
        HTMLPart: `Nowa firemka: ${name} ${surname} z firmy ${companyName} o numerze telefonu ${tel} i emailu ${email}`,
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
