import { Component } from 'react';
import axios from 'axios';

export default class DeleteGig extends Component {
    constructor(props) {
        super(props);
        this.deleteGig = this.deleteGig.bind(this);

        this.deleteGig(this.props.match.params.id)
    }

    deleteGig = async (id) => {
        // Delete the gig at the specified ID.
        await axios.delete('/gigs/delete/' + id)
            .catch(function (error) {
                console.log(error);
            });

        // Change the display back to the main page (Gig List).
        this.props.history.push('/');
    }

    render() {
        // Don't render anything.
        return null;
    }
}