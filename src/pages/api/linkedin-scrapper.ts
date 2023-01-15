import { NextApiRequest, NextApiResponse } from "next";
import { RootState } from "client/shell/store";
import actionList from "client/shell/actions";

type Result = {
  linkedinProfileUrl?: string;
  educationList?: object;
  employmentList?: object;
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  exportData(request);

  response.status(200).json({
    url: request.url,
    status: "ok",
  });
}

const exportData = (request) => {
  var linkedinProfileUrl =request.body["profile_url"];
  var educationList = [];
  var employmentList = [];
  for (let i = 1; i <= 10; i++) {
    if (!request.body["education_" + i]) break;
    educationList.push({
      school: request.body["education_" + i],
      degree: request.body["education_degree_" + i],
      speciality: request.body["education_fos_" + i],
      description: request.body["education_description_" + i],
      startDate: new Date(request.body["education_start_" + i])
        .toISOString()
        .split("T")[0],
      endDate: request.body["education_end_" + i]
        ? new Date(request.body["education_end_" + i])
            .toISOString()
            .split("T")[0]
        : new Date()
        .toISOString()
        .split("T")[0],
      position: i,
    });
  }
  for (let i = 1; i <= 10; i++) {
    if (!request.body["organization_" + i]) break;
    employmentList.push({
      orgName: request.body["organization_" + i],
      orgLinkedinId: request.body["organization_id_" + i],
      designation: request.body["organization_title_" + i],
      description: request.body["organization_description_" + i],
      startDate: new Date(request.body["organization_start_" + i])
        .toISOString()
        .split("T")[0],
      endDate: request.body["organization_end_" + i]
        ? new Date(request.body["organization_end_" + i])
            .toISOString()
            .split("T")[0]
        : new Date()
        .toISOString()
        .split("T")[0],
      location: request.body["organization_location_" + i],
      position: i,
    });
  }

  const result: Result = {};
  result.linkedinProfileUrl = linkedinProfileUrl;
  result.educationList = educationList;
  result.employmentList = employmentList;
  //actionList.updatePeoplePageFeed({ userInfoId : userInfoId });
  actionList.updatePeoplePageFeed({ result: result });
};
