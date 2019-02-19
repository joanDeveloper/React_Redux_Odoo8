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
    <span>
      {
        props.devices.map(device => {
          return (<DevicePreview device={device} key={device.slug} class="device-preview__list" />);
        })
      }

      <section className="container-pagination">
        <ListPagination
          pager={props.pager}
          devicesCount={props.devicesCount}
          currentPage={props.currentPage}
          slug_cat={props.slug_cat} />
      </section>
    </span>
  );
};

export default DeviceList;
