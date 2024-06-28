import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const hubSpotResponse = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        },
      },
    );

    return NextResponse.json(
      {
        status: 200,
        message: "success",
        result: hubSpotResponse.data,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        message: "error",
        result: error,
      },
      {
        status: 500,
      },
    );
  }
};
