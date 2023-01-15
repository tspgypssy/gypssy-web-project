import { BlackCross } from "icons/BlackCross";
import { BusinessStratergy } from "icons/BusinessStratergy";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import actionList from "client/shell/actions";
import { useSelector } from "react-redux";
import { RootState } from "client/shell/store";

export const PersonDetails = () => {
  const userDetails = useSelector(
    (state: RootState) => state.peoplefeed.userDetails
  );
  const router = useRouter();
  const { id } = router.query;

  const getDate = (formatDate) => {
    const date = new Date(formatDate);
    return `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  const getAge = (val) => {
    if (val) return new Date().getFullYear() - parseInt(val);
    else return "";
  };

  useEffect(() => {
    // if connected signup
    if (id) {
      actionList.getUserDetails({ id: id });
    }
  }, [id]);

  return (
    <>
      <div className="bg-white rounded-xl p-10  text-black overflow-y-auto h-[550px]">
        <div className="flex items-center">
          {userDetails?.profile?.userProfile?.profilePictureUrl && (
            <img
              className="h-20 w-20 rounded-full mr-2"
              src={userDetails?.profile?.userProfile?.profilePictureUrl}
            ></img>
          )}
          <p className="text-4xl font-bold">
            {userDetails?.profile?.userProfile?.fullName}
          </p>
        </div>

        <div
          tabIndex={0}
          className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10"
        >
          <div className="collapse-title text-xl font-medium">
            Profile Details
          </div>
          <div className="collapse-content">
            <div className="flex item-center mt-1">
              <p className=" font-semibold">Status :&nbsp;</p>{" "}
              <p>{userDetails?.user?.status}</p>
            </div>
            <div className="flex item-center mt-1">
              <p className=" font-semibold">Onboarded :&nbsp; </p>{" "}
              <p>{userDetails?.user?.isOnboarded ? "yes" : "no"}</p>
            </div>
            <p className="mt-1">
              Created Date: {getDate(userDetails?.user?.createdAt)}
            </p>
            <p className="mt-1">
              Linkedin Profile Updated:{" "}
              {userDetails?.user?.isLinkedinProfileUpdated ? "yes" : "no"}
            </p>
            <p className="mt-1">
              User ID: {userDetails?.profile?.userProfile?.userId}
            </p>
            <p className="mt-1">
              Age: {getAge(userDetails?.profile?.userProfile?.yearOfBirth)}
            </p>
            <p className="mt-1">
              Linkedin Link:{" "}
              {userDetails?.profile?.userProfile?.linkedinProfileLink}
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10"
        >
          <div className="collapse-title text-xl font-medium">
            Profile Inner Details
          </div>
          <div className="collapse-content">
            <p className="mt-1">
              Own Expertise:{" "}
              {userDetails?.profile?.userProfile?.ownExpertise.join()}
            </p>
            <p className="mt-1">
              Expected Expertise:{" "}
              {userDetails?.profile?.userProfile?.expectedExpertise.join()}
            </p>
            <p className="mt-1">
              Domains: {userDetails?.profile?.userProfile?.domains.join()}
            </p>
            <p className="mt-1">
              Profile Highlight:{" "}
              {userDetails?.profile?.userProfile?.profileHighlight}
            </p>
            <p className="mt-1">
              Ambition: {userDetails?.profile?.userProfile?.ambition}
            </p>
          </div>
        </div>

        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10"
        >
          <div className="collapse-title text-xl font-medium">
            Employement Details
          </div>
          <div className="collapse-content">
            <table className="table-auto w-full">
              <thead className="border-none">
                <tr className="text-[#99A2B9] !normal-case !text-sm !font-normal">
                  {/* <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !lowercase !font-normal">status</th> */}
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                    Org name
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                    Designation
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                    Description
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                    StartDate
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                    EndDate
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                    Position
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {userDetails?.employment?.map((item, i) => (
                  <tr className="!bg-super-white w-auto">
                    
                      <td className="!bg-super-white !border-b !border-super-border-table w-auto border px-8 py-4">{item?.orgName}</td>
                      <td className="!bg-super-white !border-b !border-super-border-table w-auto border px-8 py-4">{item.designation}</td>
                      <td className="!bg-super-white !border-b !border-super-border-table w-auto border px-8 py-4">{item.description}</td>
                      <td className="!bg-super-white !border-b !border-super-border-table w-auto border px-8 py-4">{item.startDate}</td>
                      <td className="!bg-super-white !border-b !border-super-border-table w-auto border px-8 py-4">{item.endDate}</td>
                      <td className="!bg-super-white !border-b !border-super-border-table w-auto border px-8 py-4">{item.position}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10"
        >
          <div className="collapse-title text-xl font-medium">
            Education Details
          </div>
          <div className="collapse-content">
          <table className="table-auto w-full">
              <thead className="border-none">
                <tr className="text-[#99A2B9] !normal-case !text-sm !font-normal">
                  {/* <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !lowercase !font-normal">status</th> */}
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                  School
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                  Degree
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                  Description
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                  StartDate
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                  EndDate
                  </th>
                  <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal border px-8 py-4">
                  Position
                  </th>
                </tr>
              </thead>
              <tbody className="">
            {userDetails?.education?.map((item, i) => (
              <tr className="!bg-super-white ">
               <td className="!bg-super-white !border-b !border-super-border-table border px-8 py-4"> {item.school}</td>
               <td className="!bg-super-white !border-b !border-super-border-table border px-8 py-4"> {item.degree}</td>
               <td className="!bg-super-white !border-b !border-super-border-table border px-8 py-4"> {item.description}</td>
               <td className="!bg-super-white !border-b !border-super-border-table border px-8 py-4"> {item.startDate}</td>
               <td className="!bg-super-white !border-b !border-super-border-table border px-8 py-4"> {item.endDate}</td>
               <td className="!bg-super-white !border-b !border-super-border-table border px-8 py-4">{item.position}</td>
              </tr>
            ))}
             </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
