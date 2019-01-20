import DevicePreview from './DevicePreview';
import ListPagination from './ListPagination';
import React from 'react';

const DeviceList = props => {
  console.log("PROPS DEVICE", props);
  if (!props.devices) return (<div className="article-preview">Loading devices...</div>);

  if (props.devices.length === 0) {
    return (<div className="article-preview">No devices are here... yet.</div>);
  }

  return (
    <div>
      {
        props.devices.map(device => {
          console.log("DEVICELIST", device);
          return (<DevicePreview device={device} key={device.slug} />);
        })
      }
      <ListPagination
        pager={props.pager}
        devicesCount={props.devicesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default DeviceList;
