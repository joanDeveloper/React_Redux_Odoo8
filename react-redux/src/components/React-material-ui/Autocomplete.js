import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({...state.deviceList});

function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

function getSuggestions(value, props) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? []
        : props.devices.filter(suggestion => {

            const keep =
                count < 5 && suggestion.slug.slice(0, inputLength).toLowerCase() === inputValue;
            if (keep) {
                count += 1;
            }

            return keep;
        });
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
    console.log("AUTOCOMPLETE",selectedItem)
    
    return (
        <Link to={`/device/${suggestion.slug}`} className="preview-link" key={suggestion.slug}>
            <MenuItem
                {...itemProps}
                key={suggestion.slug}
                selected={isHighlighted}
                component="div"
                style={{fontWeight: isSelected ? 500 : 400,}}>
                {suggestion.slug}
            </MenuItem>
        </Link>
    );
}
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: 10,
        left: 0,
        right: 0,
    },
    chip: {
        margin: `${10 / 2}px ${10 / 4}px`,
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
    inputInput: {
        width: 'auto',
        flexGrow: 1,
    },
    divider: {
        height: 10 * 2,
    },
}));

function IntegrationDownshift(props) {
    if (!props.token) { return null }
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Downshift id="downshift-simple">
                {({
                    getInputProps,
                    getItemProps,
                    getMenuProps,
                    highlightedIndex,
                    inputValue,
                    isOpen,
                    selectedItem,
                }) => (
                        <div className={classes.container}>
                            {renderInput({
                                fullWidth: true,
                                classes,
                                InputProps: getInputProps({
                                    placeholder: 'Busca tus dispositivos (Ej: Xiaomi)',
                                }),
                            })}
                            <div {...getMenuProps()}>
                                {isOpen ? (
                                    <Paper className={classes.paper} square>
                                        {getSuggestions(inputValue, props).map((suggestion, index) =>
                                            renderSuggestion({
                                                suggestion,
                                                index,
                                                itemProps: getItemProps({ item: suggestion.slug }),
                                                highlightedIndex,
                                                selectedItem,
                                            }),
                                        )}
                                    </Paper>
                                ) : null}
                            </div>
                        </div>
                    )}
            </Downshift>
        </div>
    );
}

export default connect(mapStateToProps)(IntegrationDownshift);
