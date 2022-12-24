import React from 'react';
import AccountMenu from '../../components/AccountMenu';
import SectionHeading from '../../components/SectionHeading';
import Main from '../Main';
import Section from '../Section';

const MainAccount = ({ heading, children }) => {
  return (
    <Main heading={heading}>
      <Section>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-10 py-10">
          <div className="col-span-4 lg:col-span-1 lg:border-border_input lg:border-r border-0 lg:pr-5">
            <AccountMenu />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <SectionHeading>{heading}</SectionHeading>
            {children}
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default MainAccount;
